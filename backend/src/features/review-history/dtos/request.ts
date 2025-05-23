import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

import { IsBoolean, IsOptional, IsString } from "class-validator";

import { PaginationQuery, RequestWithId } from "@domain/common/dtos/request.dto";

export class CreateAppReviewRequest {
    @ApiProperty()
    @IsString()
    appId: string;

    @ApiProperty()
    @IsBoolean()
    isApproved: boolean;

    @ApiProperty()
    @IsString()
    remark: string;
}

export class UpdateAppReviewRequest extends RequestWithId {
    @ApiProperty()
    @IsString()
    remark: string;
}

export class GetAppReviewRequest extends PaginationQuery {
    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    appId?: string;
}