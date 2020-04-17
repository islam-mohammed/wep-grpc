import { environment } from 'src/environments/environment';
import { AssetServiceClient } from '../../../pnp-sdk';

export const AssetsServiceClientFactory = () => {
  return new AssetServiceClient(environment.pnp_grpc_api);
}
