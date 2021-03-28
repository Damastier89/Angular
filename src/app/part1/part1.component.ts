import { style } from "@angular/animations";
import { StylesCompileDependency } from "@angular/compiler";
import { Component } from "@angular/core";

@Component({
selector:'app-part1',
template:` <div class='post'><h2 >Hello Part_One</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ducimus expedita ea quibusdam provident tenetur odio laborum cupiditate, ab eos voluptas eaque qui minima illum alias at enim ratione architecto.</p></div>
`,
styles: [`
.post {
  width: 500px;
  border: 1px dashed #ccc;
  padding: 1rem;
  margin-bottom: 1rem;
}
`]
})

export class Part1Component {}
