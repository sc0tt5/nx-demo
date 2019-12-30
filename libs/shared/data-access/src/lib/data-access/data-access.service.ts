import { Injectable } from '@nestjs/common';
import { Message, Page } from '@nx-demo/shared/models';

@Injectable()
export class SharedDataAccessService {
  getMessage(): Message {
    return { message: 'Welcome to api!' };
  }

  getPages(): Page[] {
    return [
      {
        param: 'page-one',
        name: 'Page 1',
        content: 'Page 1 content...',
        accordionItems: [
          { header: 'header 1', content: 'content 1' },
          { header: 'header 2', content: 'content 2' },
          { header: 'header 3', content: 'content 3' }
        ]
      },
      {
        param: 'page-two',
        name: 'Page 2',
        content: 'Page 2 content...',
        accordionItems: [
          { header: 'header 4', content: 'content 4' },
          { header: 'header 5', content: 'content 5' },
          { header: 'header 6', content: 'content 6' }
        ]
      }
    ];
  }
}
