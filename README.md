# Heliverse-Task

Hospital Food Delivery Management

# Step 1:

Install Nestjs globally -> npm i -g @nestjs/cli
For eg: (In my case, I used this for creating backend file) -> nest new backend

# Step 2:

Install packages -> npm install
For eg: (All Existing packages will install)

# Prisma Installation for first time:

Installing Primsa folder for first time -> npx prisma init

# Package details:

npm install @prisma/client @nestjs/jwt @nestjs/passport passport passport-jwt bcrypt class-validator class-transformer @nestjs/config socket.io @nestjs/websockets @nestjs/platform-socket.io
npm install -D prisma @types/passport-jwt @types/bcrypt

# Env File:

Add following variables in .env file:
DATABASE_URL="supabase_credentials"
JWT_SECRET="jwt_secret"

# After creating model in schema.prisma

Use following command:
-> npx prisma generate
-> npx prisma db push
