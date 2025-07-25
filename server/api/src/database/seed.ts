import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { ClubsService } from '../clubs/clubs.service';

async function seed() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const clubsService = app.get(ClubsService);

  const sampleClubs = [
    {
      name: 'Club LUX',
      description: 'Premier nightclub with world-class DJs and VIP experience',
      address: 'Av. Mariscal López 1234, Asunción',
      latitude: -25.2637,
      longitude: -57.5759,
      imageUrl: 'https://example.com/club-lux.jpg',
      phone: '+595 21 123-4567',
      openTime: '22:00',
      closeTime: '06:00',
    },
    {
      name: 'Neon Nights',
      description: 'Electronic music paradise with immersive light shows',
      address: 'Av. España 567, Asunción',
      latitude: -25.2808,
      longitude: -57.6394,
      imageUrl: 'https://example.com/neon-nights.jpg',
      phone: '+595 21 234-5678',
      openTime: '21:30',
      closeTime: '05:30',
    },
    {
      name: 'Rooftop Paradise',
      description: 'Open-air rooftop club with stunning city views',
      address: 'Av. Aviadores del Chaco 890, Asunción',
      latitude: -25.2913,
      longitude: -57.6083,
      imageUrl: 'https://example.com/rooftop-paradise.jpg',
      phone: '+595 21 345-6789',
      openTime: '20:00',
      closeTime: '04:00',
    },
  ];

  for (const clubData of sampleClubs) {
    await clubsService.create(clubData);
    console.log(`Created club: ${clubData.name}`);
  }

  console.log('Seeding completed!');
  await app.close();
}

seed().catch((error) => {
  console.error('Seeding failed:', error);
  process.exit(1);
});
