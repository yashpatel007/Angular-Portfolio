import { Injectable } from '@angular/core';
import * as data from '../../assets/json/portfolio.json';


@Injectable({
  providedIn: 'root'
})
export class ContentProviderService {



  content: any = data;
  theme: String = "dark"

  constructor() { }
}
