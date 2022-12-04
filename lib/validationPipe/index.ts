import { ValidationPipe } from "@storyofams/next-api-decorators";

export const Validation = ValidationPipe({
  forbidNonWhitelisted: true,
  whitelist: true,
  forbidUnknownValues: false,
});
