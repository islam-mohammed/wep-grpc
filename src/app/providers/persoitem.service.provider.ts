import { PersoItemServiceClient } from './../../../pnp-sdk';
import { environment } from 'src/environments/environment';

export const PersoItemServiceClientFactory = () => {
  return new PersoItemServiceClient(environment.pnp_grpc_api);
}
