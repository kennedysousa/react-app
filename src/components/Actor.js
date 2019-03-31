import React, { Component } from 'react';
import $ from 'jquery';
import PageHeader from './PageHeader';
import PubSub from 'pubsub-js';
import requireAuth from './requireAuth';

class ActorTable extends Component {

    render() {
        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">E-mail</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.list.map(function(item){
                            return (
                                <tr key={item.actor_id}>
                                    <td>{item.actor_id}</td>
                                    <td>{item.first_name}</td>
                                    <td>{item.last_name}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        );
    }
}


class ActorBox extends Component {
    constructor() {
        super();
        this.state = {
            list: [],
            pages: [],
        };
    }

    componentDidMount() {
        $.ajax({
            url: "http://localhost:3000/api/v1/actors",
            dataType: 'json',
            success: function(response) {
                this.setState({
                    list:response.data.actors,
                    pages: response.data.pages
                });
            }.bind(this)
        });

        PubSub.subscribe('update-actors-list', function(topic,newList){
            this.setState({list:newList});
        }.bind(this));
    }

    render() {
        return(
            <div>
                <PageHeader title="Actors"/>
                <div className="mx-auto col-6">
                    <ActorTable list={this.state.list}/>
                </div>
            </div>
        );
    }
}

export default requireAuth(ActorBox);