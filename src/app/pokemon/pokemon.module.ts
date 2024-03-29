import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListPokemonComponent } from "./list-pokemon/list-pokemon.component";
import { DetailsPokemonComponent } from "./details-pokemon/details-pokemon.component";
import { BorderCardDirective } from "./border-card.directive";
import { PokemonTypeColorPipe } from "./pokemon-type-color.pipe";
import { RouterModule, Routes } from "@angular/router";
import { PokemonService } from "./pokemon.service";
import { PokemonFormComponent } from "./pokemon-form/pokemon-form.component";
import { FormsModule } from "@angular/forms";
import { EditPokemonComponent } from "./edit-pokemon/edit-pokemon.component";

const pokemonRoutes: Routes = [
  { path: "pokemons", component: ListPokemonComponent },
  { path: "pokemon/:id", component: DetailsPokemonComponent },
  { path: "pokemon/:id/edit", component: EditPokemonComponent },
];

@NgModule({
  declarations: [
    ListPokemonComponent,
    DetailsPokemonComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
    PokemonFormComponent,
    EditPokemonComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule.forChild(pokemonRoutes)],
  providers: [PokemonService],
})
export class PokemonModule {}
