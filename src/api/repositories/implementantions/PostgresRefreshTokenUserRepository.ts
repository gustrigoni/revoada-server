import { RefreshTokenUser } from "../../entities/RefreshTokenUser";
import { prisma } from "../../../../prisma/client";
import { RefreshTokenUserRepository } from "../RefreshTokenUserRepository";

export class PostgresRefreshTokenUserRepository implements RefreshTokenUserRepository {

  /**
   * Remove refresh token by id
   * @param id
   */
  async remove(userId: string): Promise<void> {
    await prisma.refreshTokens.deleteMany({
      where: {
        userId
      }
    });
  }

  /**
   * Find refresh token by id
   * @param id
   * @returns refresh token data
   */
  async findById(id: string): Promise<RefreshTokenUser> {
    return await prisma.refreshTokens.findFirst({
      where: {
        id
      }
    });
  }

}