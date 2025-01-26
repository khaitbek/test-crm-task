import type { ICartRepository } from "../../repositories/cart.repository.interface";

interface Ctx {
  cartRepository: ICartRepository;
}

export type IGetCartByIdUseCase = typeof getCartByIdUseCase;

export async function getCartByIdUseCase({ cartRepository }: Ctx) {
  return await cartRepository.getCartById();
}
