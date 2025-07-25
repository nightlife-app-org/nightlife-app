import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClubDto } from './dto/create-club.dto';
import { UpdateClubDto } from './dto/update-club.dto';
import { Club } from './entities/club.entity';

@Injectable()
export class ClubsService {
  constructor(
    @InjectRepository(Club)
    private clubsRepository: Repository<Club>,
  ) {}

  async create(createClubDto: CreateClubDto): Promise<Club> {
    const club = this.clubsRepository.create(createClubDto);
    return await this.clubsRepository.save(club);
  }

  async findAll(): Promise<Club[]> {
    return await this.clubsRepository.find({
      where: { isActive: true },
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(id: number): Promise<Club> {
    const club = await this.clubsRepository.findOne({
      where: { id, isActive: true },
    });

    if (!club) {
      throw new NotFoundException(`Club with ID ${id} not found`);
    }

    return club;
  }

  async update(id: number, updateClubDto: UpdateClubDto): Promise<Club> {
    const club = await this.findOne(id);
    Object.assign(club, updateClubDto);
    return await this.clubsRepository.save(club);
  }

  async remove(id: number): Promise<void> {
    const club = await this.findOne(id);
    club.isActive = false;
    await this.clubsRepository.save(club);
  }

  async findByLocation(
    latitude: number,
    longitude: number,
    radius: number = 10,
  ): Promise<Club[]> {
    // Simple distance calculation - for production, consider using PostGIS
    return await this.clubsRepository
      .createQueryBuilder('club')
      .where('club.isActive = :isActive', { isActive: true })
      .andWhere(
        `(6371 * acos(cos(radians(:lat)) * cos(radians(club.latitude)) * cos(radians(club.longitude) - radians(:lng)) + sin(radians(:lat)) * sin(radians(club.latitude)))) <= :radius`,
        { lat: latitude, lng: longitude, radius },
      )
      .getMany();
  }
}
