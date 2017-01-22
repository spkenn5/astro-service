'use strict';

module.exports = function(Astrobots) {
	Astrobots.get = function(id){
		return new Promise((resolve,reject) => {
			try{
				var query = { where : {user_id:id}};
				Astrobots.findOne(query).then(rs =>{
					resolve(rs)
				}).catch(err => {
					reject(err);
				});
			}catch(err){
				reject(err);
			}
		});		
	}
	Astrobots.add = function(data){
		return new Promise((resolve,reject) => {
			try{			
				console.log('data:',data.user_id);
				var query = { where : {user_id: data.user_id }};
				Astrobots.findOne(query).then(rs1 => {
					if(rs1 != null){
						console.log('data user id: ', data.user_id, data.id);
						data.id=rs1.id	
					}
					Astrobots.upsert(data).then(rs =>{					
						resolve(rs)
					}).catch(err => {
						reject(err);
					});
				}).catch(err =>{
					reject(err);
				});								
			}catch(err){
				reject(err);
			}
		});		
	}
	Astrobots.delete = function(id){
		return new Promise((resolve,reject) => {
			try{				
				var query = { where : {user_id:id } };
				Astrobots.findOne(query).then(rs1 => {
					Astrobots.destroyById(rs1.id).then(rs =>{					
						resolve(rs)
					}).catch(err => {
						reject(err);
					});
				}).catch(err =>{
					reject(err);
				});				
			}catch(err){
				reject(err);
			}
		});		
	}
};
