import { Injectable } from '@angular/core';
import { AngularFirestore,
    AngularFirestoreCollection,
    AngularFirestoreDocument } from "angularfire2/firestore";
import { Route } from "../model/route.model";
import { AngularFireAuth } from "angularfire2/auth";
import { User } from 'firebase';
import { Observable } from 'rxjs';

@Injectable()
export class RouteService {

    // private ref = firebase.database().ref('route');

    routes: AngularFirestoreCollection<Route>;

    private routeDoc: AngularFirestoreDocument<Route>;

    private user: User;

    constructor(private fireStore: AngularFirestore, private afAuth: AngularFireAuth){
        this.routes = fireStore.collection("routes");
        debugger;
        afAuth.authState.subscribe(user => {
            if (user){
                debugger;
                this.user = user;
            }
        })
    }

    saveRoute(route: Route) {
        debugger;
        if (route.id != undefined){
            this.routeDoc = this.fireStore.doc<Route>("routes/" + route.id);
            this.routeDoc.update(route);
        }else{
            route.owner = this.user.uid;
            this.routes.add(route);
        }
    }

    // listMyRoutes(uid: string){
    //     let routes : Route[] = [];
    //     firebase.database().ref('route').orderByChild('owner').equalTo(uid).on('value', snapshot => {
    //         routes.length = 0;
    //         snapshot.forEach(childSnapshot => {
    //             let item = childSnapshot.val();
    //             item.key = childSnapshot.key;
    //             routes.push(item);
    //         });
    //     });
    //     return routes;
    // }

    searchRoute(criteria: string){
        let routes : Observable<Route[]>;
        this.routes.ref.where("name", ">=", criteria).get().then(function(querySnapshot) {
            querySnapshot.forEach(childSnapshot => {
                debugger;
                routes.push({
                    id             : childSnapshot.id,
                    name           : childSnapshot.data().name
                   });
            });
        });

        routes = this.routes.ref.where("name", ">=", criteria).get().then((querySnapshot) => {
        
            routes.
        }
        )
        
        
        .snapshotChanges().map(actions => {
            return actions.map(item => {
              return { id: item.payload.doc.id, ...item.payload.doc.data() }
            });
          });
        debugger;
        return routes;
    }
   
}