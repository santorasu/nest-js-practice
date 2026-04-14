import { Controller ,Get} from '@nestjs/common';

@Controller('user') // This decorator marks the class as a NestJS controller and specifies the route prefix for all routes in this controller.
export class UserController {
@Get()
getUser(){
    return 'User data fetched successfully?';
}
}
