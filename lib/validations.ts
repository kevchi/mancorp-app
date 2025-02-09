import * as z from 'zod'

export const cleaningRequestSchema = z.object({
  serviceType: z.enum(['regular', 'deep', 'specialized']),
  propertySize: z.number().min(1),
  preferredDate: z.string().datetime(),
  preferredTime: z.string(),
  specialInstructions: z.string().optional(),
  status: z.enum(['pending', 'approved', 'scheduled', 'rejected']).default('pending'),
})

export const cleaningJobSchema = z.object({
  requestId: z.string().uuid(),
  assignedTeamId: z.string().uuid(),
  scheduledDate: z.string().datetime(),
  startTime: z.string(),
  endTime: z.string(),
  status: z.enum(['scheduled', 'in-progress', 'completed', 'cancelled']).default('scheduled'),
  priority: z.enum(['low', 'medium', 'high']).default('medium'),
  notes: z.string().optional(),
})

export const teamSchema = z.object({
  name: z.string().min(1),
  supervisorId: z.string().uuid(),
})

export const userSchema = z.object({
  email: z.string().email(),
  role: z.enum(['customer', 'employee', 'supervisor']),
})