import { PartialType } from '@nestjs/mapped-types';
import { CreateSpotRequest as CreateSpotRequest } from './create-spot.request';

export class UpdateSpotRequest extends PartialType(CreateSpotRequest) {}
