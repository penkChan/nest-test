import { Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateProfileDto } from './dto/create-profile.dto';
@Injectable()
export class ProfilesService {
  private readonly profiles = [
    {
      id: randomUUID(),
      name: 'John Doe',
      description: 'I am a software engineer',
    },
    {
      id: randomUUID(),
      name: 'Jane Doe',
      description: 'I am a software engineer',
    },
    {
      id: randomUUID(),
      name: 'John Doe',
      description: 'I am a software engineer',
    },
    {
      id: randomUUID(),
      name: 'John Doe',
      description: 'I am a software engineer',
    },
  ];

  public findAll() {
    return this.profiles;
  }

  public findOne(id: string) {
    const profile = this.profiles.find((profile) => profile.id === id);
    if (!profile) {
      throw new NotFoundException(`Profile with id ${id} not found`);
    }
    return profile;
  }

  public create(createProfileDto: CreateProfileDto) {
    const createdProfile = {
      id: randomUUID(),
      ...createProfileDto,
    };
    this.profiles.push(createdProfile);

    return createdProfile;
  }
}
