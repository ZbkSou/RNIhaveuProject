import React, {Component} from 'react';

let instance = null;

export class UserManager {

  constructor() {
    if (!instance) {
      instance = this;
    }
    return instance;
  }

  static ShareInstance() {
    let singleton = new UserManager();
    return singleton;
  }

  setUser(user) {
    this.user = user
    console.log('this.Token = ' + this.user.core_account.token)
  }
  isLogin(){
    return this.user != null
  }

  getAccessToken() {
    console.log('this.user = '+this.user);
    return this.user == null
      ? ''
      : this.user.core_account.token
  }

}

export default userManager = UserManager.ShareInstance()