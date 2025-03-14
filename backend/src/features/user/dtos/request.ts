import { ApiPropertyOptional, OmitType } from "@nestjs/swagger";

import { IsOptional } from "class-validator";

import { PaginationQuery, RequestWithId } from "@domain/common/dtos/request.dto";
import { Role } from "@domain/common/enum/role";

export class SearchUserRequest extends PaginationQuery {
    @ApiPropertyOptional({ description: "Keyword to search user by name or email" })
    @IsOptional()
    search: string;
}

export class UpdateUserRequest extends RequestWithId {
    @ApiPropertyOptional()
    @IsOptional()
    name: string;
    @ApiPropertyOptional()
    @IsOptional()
    bio: string;
    @ApiPropertyOptional()
    @IsOptional()
    role: Role;
}

export class SelfUpdateUserRequest extends OmitType(UpdateUserRequest, ["id"]) { }