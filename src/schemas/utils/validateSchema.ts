import { AppLogger } from '@/services/Logger/Logger'
import { z } from 'zod'

interface ValidateSchemaArgs {
  schema: z.ZodObject<any>
  data: any
}

// TODO finish this
export const validateSchema = ({ schema, data }: ValidateSchemaArgs) => {
  const zodResponse = schema.safeParse(data)

  if (!zodResponse.success) {
    const errorMessage =
      'Error: fetching fetchFrontPageStories - data is malformed'
    AppLogger.error(errorMessage, { data: zodResponse.error })
    throw Error(errorMessage)
  }

  return zodResponse.data
}
