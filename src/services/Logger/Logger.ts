import { IS_PROD } from '@/constants'

interface LogOptions {
  data?: any
}

class Logger {
  error(message: string, options?: LogOptions): void {
    // TODO to some external service
    this.debug(message, options)
  }

  warn(message: string, options?: LogOptions): void {
    // TODO to some external service
    this.debug(message, options)
  }

  info(message: string, options?: LogOptions): void {
    // TODO to some external service
    this.debug(message, options)
  }

  debug(message: string, options?: LogOptions): void {
    if (!IS_PROD) {
      this.logLocally(message, options)
    }
  }

  logLocally(message: string, options?: LogOptions) {
    console.log(
      message,
      options ? JSON.stringify(options.data, null, 2) : undefined
    )
  }
}

const LoggerInstance = new Logger()

export { LoggerInstance as AppLogger }
