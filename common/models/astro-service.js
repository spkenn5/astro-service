'use strict';

const dbSource = require('../../server/server');
const co = require('co');

module.exports = function(Astroservice) {
	Astroservice.add = function(id,name,email,channel,program,cb) {
		co(function*(){
			try{
				console.log('id ', id);
				let data = {};
				data.user_id=id;
				data.user_name=name;
				data.user_email=email;
				data.user_channel_fav=channel;
				data.user_program_fav=program;
				var rs = yield dbSource.models.table_astrobots.add(data);
				cb(null,true,"Ok!",rs);
			}catch(err){
				cb(err);
			}
		});		
	}
	
	Astroservice.delete = function(id,cb) {
		co(function*(){
			try{
				var rs = yield dbSource.models.table_astrobots.delete(id);
				cb(null,true,"Ok!",rs);
			}catch(err){
				cb(err);
			}
		});		
	}

	Astroservice.get = function(id,cb) {
		co(function*(){
			try{
				var rs = yield dbSource.models.table_astrobots.get(id);
				cb(null,true,"Ok!",rs);
			}catch(err){
				cb(err);
			}
		});		
	}
};
