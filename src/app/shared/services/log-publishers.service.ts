import { Injectable } from '@angular/core'
import { LogConsole, LogPublisher, LogLocalStorage } from 'src/app/shared/log-publishers'

@Injectable()
export class LogPublishersService {
  constructor() {
    // Build publishers arrays
    this.buildPublishers()
  }

  // Public properties
  publishers: LogPublisher[] = []

  // Build publishers array
  buildPublishers(): void {
    // Create instance of LogConsole Class
    this.publishers.push(new LogConsole())

    // Create instance of `LogLocalStorage` Class
    this.publishers.push(new LogLocalStorage())
  }
}
