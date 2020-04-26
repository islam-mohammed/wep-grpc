import { CountryServiceClient } from '../../../pnp-sdk';
import { environment } from 'src/environments/environment';

export const CountryServiceClientFactory = () => {
  return new CountryServiceClient(environment.pnp_grpc_api);
}
