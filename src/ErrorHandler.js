import PubSub from 'pubsub-js';

export default class ErrorHandler {
    publishError(error){
        for(var i=0;i<error.errors.length;i++){
            var item = error.errors[i];
            PubSub.publish("validation-error", item);
        }
    }
}