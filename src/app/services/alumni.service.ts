import { Injectable } from '@angular/core';
import { alumni_samples } from 'src/data';
import { Alumni } from '../shared/models/Alumni';

@Injectable({
  providedIn: 'root'
})
export class AlumniService {

  constructor() { }

  getAllAlumni():Alumni[]{
    return alumni_samples;
  }

  getAlumniBySearchTerm(searchTerm:string){
    return this.getAllAlumni().filter((alumni)=>{
      return alumni.alumni_fname.toLowerCase().includes(searchTerm.toLowerCase());
    })
  }
}
