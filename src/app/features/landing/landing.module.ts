import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { FeaturesSectionComponent } from './components/features-section/features-section.component';
import { EventTypesComponent } from './components/event-types/event-types.component';
import { PlansComponent } from './components/plans/plans.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    LandingComponent,
    NavbarComponent,
    HeroComponent,
    FeaturesSectionComponent,
    EventTypesComponent,
    PlansComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }