/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


/** OneOf type helpers */
type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;
type OneOf<T extends any[]> = T extends [infer Only] ? Only : T extends [infer A, infer B, ...infer Rest] ? OneOf<[XOR<A, B>, ...Rest]> : never;

export interface paths {
  "/carts/count": {
    get: operations["CartController.count"];
  };
  "/carts/{id}/add-item": {
    put: operations["CartController.addItem"];
  };
  "/carts/{id}": {
    get: operations["CartController.findById"];
    put: operations["CartController.replaceById"];
    delete: operations["CartController.deleteById"];
    patch: operations["CartController.updateById"];
  };
  "/carts": {
    get: operations["CartController.find"];
    post: operations["CartController.create"];
  };
  "/orders/count": {
    get: operations["OrderController.count"];
  };
  "/orders/{id}": {
    get: operations["OrderController.findById"];
    put: operations["OrderController.replaceById"];
    delete: operations["OrderController.deleteById"];
    patch: operations["OrderController.updateById"];
  };
  "/orders": {
    get: operations["OrderController.find"];
    post: operations["OrderController.create"];
    patch: operations["OrderController.updateAll"];
  };
  "/ping": {
    get: operations["PingController.ping"];
  };
  "/products/count": {
    get: operations["ProductController.count"];
  };
  "/products/{id}": {
    get: operations["ProductController.findById"];
    put: operations["ProductController.replaceById"];
    delete: operations["ProductController.deleteById"];
    patch: operations["ProductController.updateById"];
  };
  "/products": {
    get: operations["ProductController.find"];
    post: operations["ProductController.create"];
    patch: operations["ProductController.updateAll"];
  };
  "/signin": {
    post: operations["AuthController.signIn"];
  };
  "/signup": {
    post: operations["AuthController.create"];
  };
  "/whoami": {
    get: operations["AuthController.whoAmI"];
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    /** Product */
    Product: {
      id?: string;
      /** Format: date-time */
      createdAt?: string;
      /** Format: date-time */
      updatedAt?: string;
      name: string;
      description: string;
      category: string;
      price: number;
      image: string;
    };
    /**
     * NewProduct 
     * @description (tsType: Omit<Product, 'id'>, schemaOptions: { title: 'NewProduct', exclude: [ 'id' ] })
     */
    NewProduct: {
      /** Format: date-time */
      createdAt?: string;
      /** Format: date-time */
      updatedAt?: string;
      name: string;
      description: string;
      category: string;
      price: number;
      image: string;
    };
    /**
     * DiscountWithRelations 
     * @description (tsType: DiscountWithRelations, schemaOptions: { includeRelations: true })
     */
    DiscountWithRelations: {
      id?: string;
      description?: string;
      name: string;
      percentage: number;
      active: boolean;
    };
    /**
     * ProductInventoryWithRelations 
     * @description (tsType: ProductInventoryWithRelations, schemaOptions: { includeRelations: true })
     */
    ProductInventoryWithRelations: {
      id?: string;
      quantity: number;
      /** Format: date-time */
      createdAt?: string;
    };
    /**
     * ProductWithRelations 
     * @description (tsType: ProductWithRelations, schemaOptions: { includeRelations: true })
     */
    ProductWithRelations: {
      id?: string;
      /** Format: date-time */
      createdAt?: string;
      /** Format: date-time */
      updatedAt?: string;
      name: string;
      description: string;
      category: string;
      price: number;
      image: string;
      discount?: components["schemas"]["DiscountWithRelations"];
      inventory?: components["schemas"]["ProductInventoryWithRelations"];
    };
    /**
     * ProductPartial 
     * @description (tsType: Partial<Product>, schemaOptions: { partial: true })
     */
    ProductPartial: {
      id?: string;
      /** Format: date-time */
      createdAt?: string;
      /** Format: date-time */
      updatedAt?: string;
      name?: string;
      description?: string;
      category?: string;
      price?: number;
      image?: string;
    };
    /** CartItem */
    CartItem: {
      /** Format: date-time */
      createdAt?: string;
      /** Format: date-time */
      updatedAt?: string;
      productId?: string;
      quantity: number;
    };
    /** Order */
    Order: {
      id?: string;
      /** Format: date-time */
      createdAt?: string;
      /** Format: date-time */
      updatedAt?: string;
      userId?: string;
      products: (components["schemas"]["CartItem"])[];
      /**
       * @default pending 
       * @enum {string}
       */
      status: "pending" | "processing" | "completed" | "cancelled";
      /** Format: date-time */
      date?: string;
    };
    /**
     * NewOrder 
     * @description (tsType: Omit<Order, 'id' | 'status'>, schemaOptions: { title: 'NewOrder', exclude: [ 'id', 'status' ] })
     */
    NewOrder: {
      /** Format: date-time */
      createdAt?: string;
      /** Format: date-time */
      updatedAt?: string;
      userId?: string;
      products: (components["schemas"]["CartItem"])[];
      /** Format: date-time */
      date?: string;
    };
    /**
     * UserCredentialsWithRelations 
     * @description (tsType: UserCredentialsWithRelations, schemaOptions: { includeRelations: true })
     */
    UserCredentialsWithRelations: {
      id?: string;
      password: string;
      userId: string;
    };
    /**
     * UserWithRelations 
     * @description (tsType: UserWithRelations, schemaOptions: { includeRelations: true })
     */
    UserWithRelations: {
      id?: string;
      /** Format: email */
      email: string;
      firstName: string;
      lastName: string;
      address: string;
      phone: string;
      password?: string;
      /** @constant */
      confirmPassword: {"$data":"1/password"};
      roles?: (string)[];
      userCredentials?: components["schemas"]["UserCredentialsWithRelations"];
    };
    /**
     * OrderWithRelations 
     * @description (tsType: OrderWithRelations, schemaOptions: { includeRelations: true })
     */
    OrderWithRelations: {
      id?: string;
      /** Format: date-time */
      createdAt?: string;
      /** Format: date-time */
      updatedAt?: string;
      userId?: string;
      products: (components["schemas"]["CartItem"])[];
      /**
       * @default pending 
       * @enum {string}
       */
      status: "pending" | "processing" | "completed" | "cancelled";
      /** Format: date-time */
      date?: string;
      user?: components["schemas"]["UserWithRelations"];
    };
    /**
     * OrderPartial 
     * @description (tsType: Partial<Order>, schemaOptions: { partial: true })
     */
    OrderPartial: {
      id?: string;
      /** Format: date-time */
      createdAt?: string;
      /** Format: date-time */
      updatedAt?: string;
      userId?: string;
      products?: (components["schemas"]["CartItem"])[];
      /**
       * @default pending 
       * @enum {string}
       */
      status?: "pending" | "processing" | "completed" | "cancelled";
      /** Format: date-time */
      date?: string;
    };
    /** Cart */
    Cart: {
      id?: string;
      /** Format: date-time */
      createdAt?: string;
      /** Format: date-time */
      updatedAt?: string;
      userId?: string;
      items?: (components["schemas"]["CartItem"])[];
    };
    /**
     * NewCart 
     * @description (tsType: Omit<Cart, 'id' | 'userId'>, schemaOptions: { title: 'NewCart', exclude: [ 'id', 'userId' ] })
     */
    NewCart: {
      /** Format: date-time */
      createdAt?: string;
      /** Format: date-time */
      updatedAt?: string;
      items?: (components["schemas"]["CartItem"])[];
    };
    /**
     * CartWithRelations 
     * @description (tsType: CartWithRelations, schemaOptions: { includeRelations: true })
     */
    CartWithRelations: {
      id?: string;
      /** Format: date-time */
      createdAt?: string;
      /** Format: date-time */
      updatedAt?: string;
      userId?: string;
      items?: (components["schemas"]["CartItem"])[];
      user?: components["schemas"]["UserWithRelations"];
    };
    /**
     * CartPartial 
     * @description (tsType: Partial<Cart>, schemaOptions: { partial: true })
     */
    CartPartial: {
      id?: string;
      /** Format: date-time */
      createdAt?: string;
      /** Format: date-time */
      updatedAt?: string;
      userId?: string;
      items?: (components["schemas"]["CartItem"])[];
    };
    /**
     * CartItemWithRelations 
     * @description (tsType: CartItemWithRelations, schemaOptions: { includeRelations: true })
     */
    CartItemWithRelations: {
      /** Format: date-time */
      createdAt?: string;
      /** Format: date-time */
      updatedAt?: string;
      productId?: string;
      quantity: number;
    };
    /**
     * NewCartItem 
     * @description (tsType: Omit<CartItem, 'quantity'>, schemaOptions: { title: 'NewCartItem', exclude: [ 'quantity' ] })
     */
    NewCartItem: {
      /** Format: date-time */
      createdAt?: string;
      /** Format: date-time */
      updatedAt?: string;
      productId?: string;
    };
    /** User */
    User: {
      id?: string;
      /** Format: email */
      email: string;
      firstName: string;
      lastName: string;
      address: string;
      phone: string;
      password?: string;
      /** @constant */
      confirmPassword: {"$data":"1/password"};
      roles?: (string)[];
    };
    /**
     * NewUser 
     * @description (tsType: Omit<User, 'id' | 'roles'>, schemaOptions: { title: 'NewUser', exclude: [ 'id', 'roles' ] })
     */
    NewUser: {
      /** Format: email */
      email: string;
      firstName: string;
      lastName: string;
      address: string;
      phone: string;
      password?: string;
      /** @constant */
      confirmPassword: {"$data":"1/password"};
    };
    /** loopback.Count */
    "loopback.Count": {
      count?: number;
    };
    /** Cart.ScopeFilter */
    "Cart.ScopeFilter": {
      offset?: number;
      /** @example 100 */
      limit?: number;
      skip?: number;
      order?: string | (string)[];
      where?: {
        [key: string]: unknown;
      };
      fields?: OneOf<[{
        [key: string]: unknown;
      }, (string)[]]>;
      include?: ({
          [key: string]: unknown;
        })[];
    };
    /** Cart.IncludeFilter.Items */
    "Cart.IncludeFilter.Items": {
      /** @enum {string} */
      relation?: "user";
      scope?: components["schemas"]["Cart.ScopeFilter"];
    };
    /** Cart.Filter */
    "Cart.Filter": {
      offset?: number;
      /** @example 100 */
      limit?: number;
      skip?: number;
      order?: string | (string)[];
      /** Cart.Fields */
      fields?: OneOf<[{
        id?: boolean;
        createdAt?: boolean;
        updatedAt?: boolean;
        userId?: boolean;
        items?: boolean;
      }, ("id" | "createdAt" | "updatedAt" | "userId" | "items")[]]>;
      /** Cart.IncludeFilter */
      include?: (components["schemas"]["Cart.IncludeFilter.Items"] | string)[];
    };
    /** Cart.Filter */
    "Cart.Filter1": {
      offset?: number;
      /** @example 100 */
      limit?: number;
      skip?: number;
      order?: string | (string)[];
      /** Cart.WhereFilter */
      where?: {
        [key: string]: unknown;
      };
      /** Cart.Fields */
      fields?: OneOf<[{
        id?: boolean;
        createdAt?: boolean;
        updatedAt?: boolean;
        userId?: boolean;
        items?: boolean;
      }, ("id" | "createdAt" | "updatedAt" | "userId" | "items")[]]>;
      /** Cart.IncludeFilter */
      include?: (components["schemas"]["Cart.IncludeFilter.Items"] | string)[];
    };
    /** Order.ScopeFilter */
    "Order.ScopeFilter": {
      offset?: number;
      /** @example 100 */
      limit?: number;
      skip?: number;
      order?: string | (string)[];
      where?: {
        [key: string]: unknown;
      };
      fields?: OneOf<[{
        [key: string]: unknown;
      }, (string)[]]>;
      include?: ({
          [key: string]: unknown;
        })[];
    };
    /** Order.IncludeFilter.Items */
    "Order.IncludeFilter.Items": {
      /** @enum {string} */
      relation?: "user";
      scope?: components["schemas"]["Order.ScopeFilter"];
    };
    /** Order.Filter */
    "Order.Filter": {
      offset?: number;
      /** @example 100 */
      limit?: number;
      skip?: number;
      order?: string | (string)[];
      /** Order.Fields */
      fields?: OneOf<[{
        id?: boolean;
        createdAt?: boolean;
        updatedAt?: boolean;
        userId?: boolean;
        products?: boolean;
        status?: boolean;
        date?: boolean;
      }, ("id" | "createdAt" | "updatedAt" | "userId" | "products" | "status" | "date")[]]>;
      /** Order.IncludeFilter */
      include?: (components["schemas"]["Order.IncludeFilter.Items"] | string)[];
    };
    /** Order.Filter */
    "Order.Filter1": {
      offset?: number;
      /** @example 100 */
      limit?: number;
      skip?: number;
      order?: string | (string)[];
      /** Order.WhereFilter */
      where?: {
        [key: string]: unknown;
      };
      /** Order.Fields */
      fields?: OneOf<[{
        id?: boolean;
        createdAt?: boolean;
        updatedAt?: boolean;
        userId?: boolean;
        products?: boolean;
        status?: boolean;
        date?: boolean;
      }, ("id" | "createdAt" | "updatedAt" | "userId" | "products" | "status" | "date")[]]>;
      /** Order.IncludeFilter */
      include?: (components["schemas"]["Order.IncludeFilter.Items"] | string)[];
    };
    /** PingResponse */
    PingResponse: {
      greeting?: string;
      date?: string;
      url?: string;
      headers?: {
        "Content-Type"?: string;
        [key: string]: unknown;
      };
    };
    /** Product.ScopeFilter */
    "Product.ScopeFilter": {
      offset?: number;
      /** @example 100 */
      limit?: number;
      skip?: number;
      order?: string | (string)[];
      where?: {
        [key: string]: unknown;
      };
      fields?: OneOf<[{
        [key: string]: unknown;
      }, (string)[]]>;
      include?: ({
          [key: string]: unknown;
        })[];
    };
    /** Product.IncludeFilter.Items */
    "Product.IncludeFilter.Items": {
      /** @enum {string} */
      relation?: "discount" | "inventory";
      scope?: components["schemas"]["Product.ScopeFilter"];
    };
    /** Product.Filter */
    "Product.Filter": {
      offset?: number;
      /** @example 100 */
      limit?: number;
      skip?: number;
      order?: string | (string)[];
      /** Product.Fields */
      fields?: OneOf<[{
        id?: boolean;
        createdAt?: boolean;
        updatedAt?: boolean;
        name?: boolean;
        description?: boolean;
        category?: boolean;
        price?: boolean;
        image?: boolean;
      }, ("id" | "createdAt" | "updatedAt" | "name" | "description" | "category" | "price" | "image")[]]>;
      /** Product.IncludeFilter */
      include?: (components["schemas"]["Product.IncludeFilter.Items"] | string)[];
    };
    /** Product.Filter */
    "Product.Filter1": {
      offset?: number;
      /** @example 100 */
      limit?: number;
      skip?: number;
      order?: string | (string)[];
      /** Product.WhereFilter */
      where?: {
        [key: string]: unknown;
      };
      /** Product.Fields */
      fields?: OneOf<[{
        id?: boolean;
        createdAt?: boolean;
        updatedAt?: boolean;
        name?: boolean;
        description?: boolean;
        category?: boolean;
        price?: boolean;
        image?: boolean;
      }, ("id" | "createdAt" | "updatedAt" | "name" | "description" | "category" | "price" | "image")[]]>;
      /** Product.IncludeFilter */
      include?: (components["schemas"]["Product.IncludeFilter.Items"] | string)[];
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type external = Record<string, never>;

export interface operations {

  "CartController.count": {
    parameters: {
      query?: {
        where?: string;
      };
    };
    responses: {
      /** @description Cart model count */
      200: {
        content: {
          "application/json": components["schemas"]["loopback.Count"];
        };
      };
    };
  };
  "CartController.addItem": {
    parameters: {
      path: {
        id: string;
      };
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["NewCartItem"];
      };
    };
    responses: {
      /** @description User shopping cart item added. */
      200: {
        content: {
          "application/json": components["schemas"]["CartItemWithRelations"];
        };
      };
    };
  };
  "CartController.findById": {
    parameters: {
      query?: {
        filter?: string;
      };
      path: {
        id: string;
      };
    };
    responses: {
      /** @description Cart model instance */
      200: {
        content: {
          "application/json": components["schemas"]["CartWithRelations"];
        };
      };
    };
  };
  "CartController.replaceById": {
    parameters: {
      path: {
        id: string;
      };
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["Cart"];
      };
    };
    responses: {
      /** @description No Content */
      204: {
        content: {
          "application/json": unknown;
        };
      };
    };
  };
  "CartController.deleteById": {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      /** @description No Content */
      204: {
        content: {
          "application/json": unknown;
        };
      };
    };
  };
  "CartController.updateById": {
    parameters: {
      path: {
        id: string;
      };
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["CartPartial"];
      };
    };
    responses: {
      /** @description No Content */
      204: {
        content: {
          "application/json": unknown;
        };
      };
    };
  };
  "CartController.find": {
    parameters: {
      query?: {
        filter?: string;
      };
    };
    responses: {
      /** @description Array of Cart model instances */
      200: {
        content: {
          "application/json": (components["schemas"]["CartWithRelations"])[];
        };
      };
    };
  };
  "CartController.create": {
    requestBody?: {
      content: {
        "application/json": components["schemas"]["NewCart"];
      };
    };
    responses: {
      /** @description Cart model instance */
      200: {
        content: {
          "application/json": components["schemas"]["Cart"];
        };
      };
    };
  };
  "OrderController.count": {
    parameters: {
      query?: {
        where?: string;
      };
    };
    responses: {
      /** @description Order model count */
      200: {
        content: {
          "application/json": components["schemas"]["loopback.Count"];
        };
      };
    };
  };
  "OrderController.findById": {
    parameters: {
      query?: {
        filter?: string;
      };
      path: {
        id: string;
      };
    };
    responses: {
      /** @description Order model instance */
      200: {
        content: {
          "application/json": components["schemas"]["OrderWithRelations"];
        };
      };
    };
  };
  "OrderController.replaceById": {
    parameters: {
      path: {
        id: string;
      };
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["Order"];
      };
    };
    responses: {
      /** @description No Content */
      204: {
        content: {
          "application/json": unknown;
        };
      };
    };
  };
  "OrderController.deleteById": {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      /** @description No Content */
      204: {
        content: {
          "application/json": unknown;
        };
      };
    };
  };
  "OrderController.updateById": {
    parameters: {
      path: {
        id: string;
      };
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["OrderPartial"];
      };
    };
    responses: {
      /** @description No Content */
      204: {
        content: {
          "application/json": unknown;
        };
      };
    };
  };
  "OrderController.find": {
    parameters: {
      query?: {
        filter?: string;
      };
    };
    responses: {
      /** @description Array of Order model instances */
      200: {
        content: {
          "application/json": (components["schemas"]["OrderWithRelations"])[];
        };
      };
    };
  };
  "OrderController.create": {
    requestBody?: {
      content: {
        "application/json": components["schemas"]["NewOrder"];
      };
    };
    responses: {
      /** @description Order model instance */
      200: {
        content: {
          "application/json": components["schemas"]["Order"];
        };
      };
    };
  };
  "OrderController.updateAll": {
    parameters: {
      query?: {
        where?: string;
      };
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["OrderPartial"];
      };
    };
    responses: {
      /** @description Order PATCH success count */
      200: {
        content: {
          "application/json": components["schemas"]["loopback.Count"];
        };
      };
    };
  };
  "PingController.ping": {
    responses: {
      /** @description Ping Response */
      200: {
        content: {
          "application/json": components["schemas"]["PingResponse"];
        };
      };
    };
  };
  "ProductController.count": {
    parameters: {
      query?: {
        where?: string;
      };
    };
    responses: {
      /** @description Product model count */
      200: {
        content: {
          "application/json": components["schemas"]["loopback.Count"];
        };
      };
    };
  };
  "ProductController.findById": {
    parameters: {
      query?: {
        filter?: string;
      };
      path: {
        id: string;
      };
    };
    responses: {
      /** @description Product model instance */
      200: {
        content: {
          "application/json": components["schemas"]["ProductWithRelations"];
        };
      };
    };
  };
  "ProductController.replaceById": {
    parameters: {
      path: {
        id: string;
      };
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["Product"];
      };
    };
    responses: {
      /** @description No Content */
      204: {
        content: {
          "application/json": unknown;
        };
      };
    };
  };
  "ProductController.deleteById": {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      /** @description No Content */
      204: {
        content: {
          "application/json": unknown;
        };
      };
    };
  };
  "ProductController.updateById": {
    parameters: {
      path: {
        id: string;
      };
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["ProductPartial"];
      };
    };
    responses: {
      /** @description No Content */
      204: {
        content: {
          "application/json": unknown;
        };
      };
    };
  };
  "ProductController.find": {
    parameters: {
      query?: {
        filter?: string;
      };
    };
    responses: {
      /** @description Array of Product model instances */
      200: {
        content: {
          "application/json": (components["schemas"]["ProductWithRelations"])[];
        };
      };
    };
  };
  "ProductController.create": {
    requestBody?: {
      content: {
        "application/json": components["schemas"]["NewProduct"];
      };
    };
    responses: {
      /** @description Product model instance */
      200: {
        content: {
          "application/json": components["schemas"]["Product"];
        };
      };
    };
  };
  "ProductController.updateAll": {
    parameters: {
      query?: {
        where?: string;
      };
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["ProductPartial"];
      };
    };
    responses: {
      /** @description Product PATCH success count */
      200: {
        content: {
          "application/json": components["schemas"]["loopback.Count"];
        };
      };
    };
  };
  "AuthController.signIn": {
    /** @description The input of login function */
    requestBody: {
      content: {
        "application/json": {
          /** Format: email */
          email: string;
          password: string;
        };
      };
    };
    responses: {
      /** @description Token */
      200: {
        content: {
          "application/json": {
            token?: string;
          };
        };
      };
    };
  };
  "AuthController.create": {
    requestBody: {
      content: {
        "application/json": components["schemas"]["NewUser"];
      };
    };
    responses: {
      /** @description User model instance */
      200: {
        content: {
          "application/json": components["schemas"]["User"];
        };
      };
    };
  };
  "AuthController.whoAmI": {
    responses: {
      /** @description Return current user */
      200: {
        content: {
          "application/json": string;
        };
      };
    };
  };
}
