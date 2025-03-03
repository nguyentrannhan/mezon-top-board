import { Body, Controller, Delete, Get, Put, Query } from "@nestjs/common";
import { ApiBearerAuth, ApiResponse, ApiTags } from "@nestjs/swagger";

import { RequestWithId } from "@domain/common/dtos/request.dto";
import { User } from "@domain/entities";

import { GetUserFromHeader } from "@libs/decorator/getUserFromHeader.decorator";
import { Logger } from "@libs/logger";

import { SearchUserRequest, UpdateUserRequest } from "./dtos/request";
import { GetUserDetailsResponse, SearchUserResponse } from "./dtos/response";
import { UserService } from "./user.service";

@Controller("user")
@ApiTags("User")
export class UserController {
    constructor(
        private readonly userService: UserService,
        private readonly logger: Logger,
    ) {
        this.logger.setContext(UserController.name);
    }

    @ApiBearerAuth()
    @Get()
    @ApiResponse({ type: SearchUserResponse })
    async searchUser(@Query() query: SearchUserRequest) {
        return this.userService.searchUser(query);
    }

    @Get("me")
    @ApiBearerAuth()
    @ApiResponse({ type: GetUserDetailsResponse })
    async getUserDetails(@GetUserFromHeader() user: User) {
        return this.userService.getUserDetails(user.id);
    }

    @Put()
    @ApiBearerAuth()
    async updateUser(@Body() body: UpdateUserRequest) {
        return this.userService.updateUser(body);
    }

    @Delete()
    @ApiBearerAuth()
    async deleteUser(@Body() body: RequestWithId) {
        return this.userService.deleteUser(body);
    }
}
