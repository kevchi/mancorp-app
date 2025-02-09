export class APIError extends Error {
  constructor(
    public statusCode: number,
    message: string,
    public code?: string
  ) {
    super(message)
    this.name = 'APIError'
  }
}

export function handleError(error: unknown) {
  if (error instanceof APIError) {
    return Response.json(
      {
        error: error.message,
        code: error.code,
      },
      { status: error.statusCode }
    )
  }

  console.error('Unhandled error:', error)
  
  return Response.json(
    {
      error: 'Internal server error',
      code: 'INTERNAL_SERVER_ERROR',
    },
    { status: 500 }
  )
}

export function validateRequest<T>(data: unknown, schema: any): T {
  try {
    return schema.parse(data)
  } catch (error) {
    throw new APIError(400, 'Invalid request data', 'VALIDATION_ERROR')
  }
}