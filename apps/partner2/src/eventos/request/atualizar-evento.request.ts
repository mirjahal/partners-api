import { PartialType } from '@nestjs/mapped-types';
import { CriarEventoRequest as CriarEventoRequest } from './criar-evento.request';

export class AtualizarEventoRequest extends PartialType(CriarEventoRequest) {}
