import { Component } from '@angular/core';
import { NavController, NavController, ActionSheetController, ToastController, Platform, LoadingController, Loading } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { File } from '@ionic-native/file';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';

declare var corodva: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	lastImage: string = null;
	loading: Loading;

   public items : any = [];
   constructor(public navCtrl: NavController,
               public http   : Http,
               public navParams: NavParams,
			   private camera: Camera,
			   private transfer: Transfer, 
			   private file: File, 
			   private filePath: FilePath, 
			   public actionSheetCtrl: ActionSheetController, 
			   public toastCtrl: ToastController, 
			   public platform: Platform, 
			   public loadingCtrl: LoadingController) { }
)
   {

   }


   ionViewWillEnter()
   {
      this.load();
   }

   // Retrieve the JSON encoded data from the remote server
   // Using Angular's Http class and an Observable - then
   // assign this to the items array for rendering to the HTML template
   load()
   {
      this.http.get('http://192.168.6.53/ionic/retrieve-data.php')
      .map(res => res.json())
      .subscribe(data =>
      {
         this.items = data;
      });
   }


   // Allow navigation to the AddTechnology page for creating a new entry
   addEntry()
   {
      this.navCtrl.push('AddTechnology');
   }


   // Allow navigation to the AddTechnology page for amending an existing entry
   // (We supply the actual record to be amended, as this method's parameter,
   // to the AddTechnology page
   viewEntry(param)
   {
      this.navCtrl.push('AddTechnology', param);
   }

 
}
