import { PrismaClient } from '@prisma/client';
import { ITeacherRegister } from '../@types/ITeacher';

export class TeacherModel {
  private prismaService: PrismaClient = new PrismaClient();

  async register(data: ITeacherRegister, googleId: string) {
    const teacher = await this.prismaService.teacher.create({
      data: {
        ...data,
        googleId,
      },
    });

    teacher.password = '';

    return {
      teacher,
    };
  }

  async findByGoogleId(googleId: string) {
    const teacher = await this.prismaService.teacher.findUnique({
      where: {
        googleId,
      },
    });

    return {
      teacher,
    };
  }

  private async findById(id: string) {
    const teacher = await this.prismaService.teacher.findUnique({
      where: {
        id,
      },
    });

    return {
      teacher,
    };
  }
  async findByArea(area: string) {
    const teachers = await this.prismaService.teacher.findMany({
      where: {
        area,
      },
    });

    return {
      teachers,
    };
  }

  async update(id: string, data: Partial<ITeacherRegister>) {
    if (!this.findById(id)) return false;

    const teacher = await this.prismaService.teacher.update({
      data,
      where: {
        id,
      },
    });

    return {
      teacher,
    };
  }

  async destroy(id: string) {
    if (!this.findById(id)) {
      return false;
    }

    await this.prismaService.teacher.delete({
      where: {
        id,
      },
    });

    return true;
  }
}
