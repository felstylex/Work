import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { WhyCreatePageComponent } from './why-create-page/why-create-page.component';
import { ModelsPageComponent } from './models-page/models-page.component';
import { ModelDetailComponent } from './model-detail/model-detail.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { ThanksComponent } from './thanks/thanks.component';

const routes: Routes = [
  {path: "", component: HomePageComponent},
  {path: "porque-criar-um-site", component: WhyCreatePageComponent},
  {path: "modelos", component: ModelsPageComponent},
  {path: "modelo/:id", component: ModelDetailComponent},
  {path: "serviços", component: ServicesComponent},
  {path: "contato", component: ContactComponent},
  {path: "obrigado", component: ThanksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
