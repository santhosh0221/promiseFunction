sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("promise.controller.View1", {
			onInit: function () {

			},
			onPressBtnAll:function(){
            //     debugger;
            //     let oData = this.getOwnerComponent().getModel().getProperty("/selected");
                
                
            //     let promiseO = new Promise(function(resolve){
                    
            //         if(oData.length==0){
            //         resolve()
            //         {
            //             let oObj={
            //                 job0:"job0:can start any Time",
            //                 state:"0 completed"
            //             };
            //             let oObj1={
            //                 job0:oObj
            //             }
            //             oData.push(oObj1);
            //             this.getOwnerComponent().getModel().setProperty("/selected",oData);
            //         }}}
            //     );
            //     let promiseA = new Promise(function(resolve){
                    
            //         if(oData.length==0 || oData.length==1){
            //         resolve()
            //         {
            //             let oObj={
            //                 jobA:"jobA:can start any Time",
            //                 state:"A completed"
            //             };
            //             let oObj1={
            //                 jobA:oObj
            //             }
            //             oData.push(oObj1);
            //             this.getOwnerComponent().getModel().setProperty("/selected",oData);
            //         }}
            //         }
            //     );
            //     let promiseB = new Promise(function(resolve){
            //         var oresultA=oData.find(a => a.jobA)
            //         if(oresultA.jobA.state == "A completed"){
            //         resolve()
            //         {
            //             let oObj={
            //                 jobB:"jobA has completed work, jobB:can start work ",
            //                 state:"B completed"
            //             };
            //             let oObj1={
            //                 jobB:oObj
            //             }
            //             oData.push(oObj1);
            //             this.getOwnerComponent().getModel().setProperty("/selected",oData);
            //         }}}
            //     );
            //     let promiseC = new Promise(function(resolve){
            //         var oresultA=oData.find(a => a.jobA);
            //         var oresult0=oData.find(a => a.job0);
            //         if(oresultA.jobA.state == "A completed" && oresult0.job0.state == "0 completed"){
            //         resolve()
            //         {
            //             let oObj={
            //                 jobC:"jobA has completed work and job0 has completed work, jobC:can start work ",
            //                 state:"C completed"
            //             };
            //             let oObj1={
            //                 jobC:oObj
            //             }
            //             oData.push(oObj1);
            //             this.getOwnerComponent().getModel().setProperty("/selected",oData);
            //         }}}
            //     );
            //     let promiseD = new Promise(function(resolve){
            //         var oresultA=oData.find(a => a.jobA);
            //         var oresultC=oData.find(a => a.jobC);
            //         if(oresultA.jobA.state == "A completed" && oresultC.jobC.state == "C completed"){
            //         resolve()
            //         {
            //             let oObj={
            //                 jobD:"jobA has completed work,jobC has completed work, jobD:can start work ",
            //                 state:"D completed"
            //             };
            //             let oObj1={
            //                 jobD:oObj
            //             }
            //             oData.push(oObj1);
            //             this.getOwnerComponent().getModel().setProperty("/selected",oData);
            //         }}}
            //     );
            //     let promiseE = new Promise(function(resolve,reject){
            //         var oresultA=oData.find(a => a.jobA);
            //         var oresultB=oData.find(a => a.jobB);
            //         var oresultC=oData.find(a => a.jobC);
            //         if(oresultA.jobA.state != "A completed" || oresultC.jobC.state != "C completed" ||
            //         oresultB.jobB.state != "B completed"){
            //         resolve()
            //         {
            //             let oObj={
            //                 jobE:"jobA has not completed work or jobB  has not completed work or jobC  has not completed work, jobE can start work",
            //                 state:"E completed"
            //             };
            //             let oObj1={
            //                 jobE:oObj
            //             }
            //             oData.push(oObj1);
            //             this.getOwnerComponent().getModel().setProperty("/selected",oData);
            //         }
            //     }
            //     else reject()
            //     {
            //         let oObj={
            //                 jobE:"jobA has completed work,jobB has completed work,jobC has completed work, jobE:can'T start work ",
            //                 state:"E pending"
            //             };
            //             let oObj1={
            //                 jobE:oObj
            //             }
            //             oData.push(oObj1);
            //             this.getOwnerComponent().getModel().setProperty("/selected",oData);

            //     }
            // }
            //     );
            //     let promiseF = new Promise(function(resolve){
            //        var oresultD=oData.find(a => a.jobD);
            //         var oresultE=oData.find(a => a.jobE);
            //         if(oresultD.jobD.state == "D completed" || oresultE.jobE.state == "E completed"){
            //         resolve()
            //         {
            //             let oObj={
            //                 jobF:"jobD has completed work OR  jobE has not completed work so jobE can start, jobF can start work",
            //                 state:"F completed"
            //             };
            //             let oObj1={
            //                 jobE:oObj
            //             }
            //             oData.push(oObj1);
            //             this.getOwnerComponent().getModel().setProperty("/selected",oData);
            //         }}}
            //     );

            //     Promise.all([promiseO,promiseA,promiseB,promiseC,promiseD,promiseE,promiseF]).then((values) => {
            //     let oData = this.getOwnerComponent().getModel().getProperty("/selected");
			//     });
			
			
			debugger
			let oData = [];
			
			let promiseO = new Promise(function(resolve){
				
				if(oData.length==0){
				resolve()
				{
					let sString= "Promise O exicuded success";
					
					oData.push(sString);
				}}}
			);
			let promiseA = new Promise(function(resolve, reject){
				let fSuccess=false;
				setTimeout(()=>{ fSuccess=true; 5000})
				if(fSuccess==true){
				resolve()
				{
					let sString= "Promise A exicuded success ";
					
					oData.push(sString);
				}}
				else
				reject()
				{
					let sString= "Promise A not exicuded success ";
					
					oData.push(sString);
				}
			}
			);
			const promises = [promiseO,promiseA];
			Promise.all(promises).then(() => {
				sap.m.MessageToast.show(oData);
				}).catch(()=>{sap.m.MessageToast.show("All Promise are not eicuted");});
			},
			onPressBtnAny:function(){
				debugger
				let oData = [];
				
				let promiseO = new Promise(function(resolve){
                    
                    if(oData.length==0){
                    resolve()
                    {
                        let sString= "Promise O exicuded success";
                        
                        oData.push(sString);
                    }}}
				);
				let promiseA = new Promise(function(resolve){
					let fSuccess=false;
                    setTimeout(()=>{ fSuccess=true; 5000})
                    if(fSuccess==true){
                    resolve()
                    {
                        let sString= "Promise A exicuded success ";
                        
                        oData.push(sString);
                    }}}
				);

				
                // let promiseA = new Promise(function(resolve){
                    
                //     if(oData.length==0 || oData.length==1){
                //     resolve()
                //     {
                //         let oObj={
                //             jobA:"jobA:can start any Time",
                //             state:"A completed"
                //         };
                //         let oObj1={
                //             jobA:oObj
                //         }
                //         oData.push(oObj1);
                //         this.getOwnerComponent().getModel().setProperty("/pAny",oData);
                //     }}
                //     }
                // );
                // let promiseB = new Promise(function(resolve){
                //     var oresultA=oData.find(a => a.jobA)
                //     if(oresultA.jobA.state == "A completed"){
                //     resolve()
                //     {
                //         let oObj={
                //             jobB:"jobA has completed work, jobB:can start work ",
                //             state:"B completed"
                //         };
                //         let oObj1={
                //             jobB:oObj
                //         }
                //         oData.push(oObj1);
                //         this.getOwnerComponent().getModel().setProperty("/pAny",oData);
                //     }}}
				// );
				const promises = [promiseO,promiseA];
				Promise.any(promises).then(() => {
					sap.m.MessageToast.show(oData);
					}).catch(()=>{sap.m.MessageToast.show("All Promise are not eicuted");});
			},

			onPressBtnRace:function(){
				debugger
				let oData = [];
				
				
				let promiseA = new Promise(function(resolve){
					let fSuccess=false;
                    setTimeout(()=>{ fSuccess=true; 5000})
                    if(fSuccess==true){
                    resolve()
                    {
                        let sString= "Promise A exicuded success after 5000ms";
                        
                        oData.push(sString);
                    }}}
				);
				let promiseO = new Promise(function(resolve){
                    
                    if(oData.length==0){
                    resolve()
                    {
                        let sString= "Promise O exicuded success before promise A(5000ms delay)";
                        
                        oData.push(sString);
                    }}}
				);
				const promises = [promiseA,promiseO];
				Promise.race(promises).then(() => {
					sap.m.MessageToast.show(oData);
					}).catch(()=>{sap.m.MessageToast.show("All Promise are not eicuted");});
			}
			
		});
	});
