import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsModule } from './projects/projects.module';
import { ClientsModule } from './clients/clients.module';
import { EmployeesModule } from './employees/employees.module';
import { PartnershipsModule } from './partnerships/partnerships.module';
import { FinanceModule } from './finance/finance.module';
import { ContractsModule } from './contracts/contracts.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from './config/config/config.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [ProjectsModule, ClientsModule, EmployeesModule, PartnershipsModule, FinanceModule, ContractsModule, AuthModule, ConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
