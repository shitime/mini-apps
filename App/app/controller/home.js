'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    // 首页表
    * create() {
      this.ctx.body = yield this.service.home.create(this.ctx.request.body);
    }
    * delete() {
      this.ctx.body = yield this.service.home.delete(this.ctx.request.body);
    }
    * updata() {
      this.ctx.body = yield this.service.home.updata(this.ctx.request.body);
    }
    * get() {
      this.ctx.body = yield this.service.home.get(this.ctx.request.body);
    }
    // 购物车表
    * cartCreate() {
      this.ctx.body = yield this.service.home.cartCreate(this.ctx.request.body);
    }
    * cartGet() {
      this.ctx.body = yield this.service.home.cartGet(this.ctx.request.body);
    }
    * cartDelete() {
      this.ctx.body = yield this.service.home.cartDelete(this.ctx.request.body);
    }
    * cartUpdate() {
      this.ctx.body = yield this.service.home.cartUpdate(this.ctx.request.body);
    }
    // 收货地址
    * addressCreate() {
      this.ctx.body = yield this.service.home.addressCreate(this.ctx.request.body);
    }
    * addressGet() {
      this.ctx.body = yield this.service.home.addressGet(this.ctx.request.body);
    }
    * addressDelete() {
      this.ctx.body = yield this.service.home.addressDelete(this.ctx.request.body);
    }
    * addressUpdate() {
      this.ctx.body = yield this.service.home.addressUpdate(this.ctx.request.body);
    }
  }
  return HomeController;
};
