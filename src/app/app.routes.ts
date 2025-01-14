import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from '../Components/home/home.component';
import { AboutComponent } from '../Components/about/about.component';
import { PortifolioComponent } from '../Components/portifolio/portifolio.component';
import { ContactComponent } from '../Components/contact/contact.component';


export const routes: Routes = [
{"path":'',redirectTo:'home', pathMatch:'full'},
{"path": 'home', component:HomeComponent, title:"Home"},
{"path": 'about', component:AboutComponent,title:"About"},
{"path": 'portoflio', component:PortifolioComponent,title:"Portoflio"},
{"path": 'contact', component:ContactComponent,title:"Contact"},

]
