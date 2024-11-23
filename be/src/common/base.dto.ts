import { Expose, plainToClass } from 'class-transformer';

export abstract class base {
  @Expose()
  id: number;
  @Expose()
  createdAt: Date;
  @Expose()
  updatedAt: Date;
  @Expose()
  deletedAt: Date;

  /**
   * Đây là một khai báo kiểu phức tạp. Nó chỉ định rằng this trong ngữ cảnh này là một hàm constructor (hàm tạo) của một lớp.
   * (...args: any[]) nghĩa là hàm constructor có thể nhận bất kỳ số lượng đối số nào, với bất kỳ kiểu dữ liệu nào.
   * => T nghĩa là hàm constructor này trả về một instance của lớp T.
  */
  static plainToClass<T>(this: new (...args: any[]) => T, obj: T): T {
    return plainToClass(this, obj, { excludeExtraneousValues: true });
  }
}
