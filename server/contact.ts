import { z } from 'zod';
import { publicProcedure, router } from './_core/trpc';
import { TRPCError } from '@trpc/server';

// Validation schema for contact form
const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Invalid email address'),
  company: z.string().max(100).optional().default(''),
  message: z.string().min(10, 'Message must be at least 10 characters').max(5000),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;

export const contactRouter = router({
  submit: publicProcedure
    .input(contactFormSchema)
    .mutation(async ({ input }) => {
      // Validate input
      const validatedData = contactFormSchema.parse(input);

      try {
        // In production, you would:
        // 1. Store the inquiry in the database
        // 2. Send an email notification to the team
        // 3. Optionally send a confirmation email to the user

        // For now, we'll just log it and return success
        console.log('[Contact Form] New inquiry received:', {
          timestamp: new Date().toISOString(),
          ...validatedData,
        });

        // Simulate a brief delay to represent database operation
        await new Promise((resolve) => setTimeout(resolve, 500));

        return {
          success: true,
          message: 'Your inquiry has been received. We will get back to you soon.',
        };
      } catch (error) {
        console.error('[Contact Form] Error processing submission:', error);
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Failed to process your inquiry. Please try again later.',
        });
      }
    }),
});
