import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:'<html><div class = "PRAJWAL"><label for="fname">Marvellous Infisystems:</label><input type="text" id="fname" name="fname"></div></html>',
  styles: ['.PRAJWAL{color:blue;padding: 8px;}{font-color:blue}']
})
export class AppComponent {
  title = 'ThirdngQuestion';
}
