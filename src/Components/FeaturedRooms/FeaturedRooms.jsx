import React, { Component } from "react";

// import context
import { RoomContext } from "../../Context/Context";

// import components
import Loading from "../Loading/Loading";
import Room from "../Room/Room";
import Title from "../Title/Title";

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;

  render() {
    let featuredRooms = this.context;
    featuredRooms = featuredRooms?.featuredRooms.map((room) => {
      return <Room key={room.id} room={room} />;
    });

    return (
      <section className="featured-rooms">
        <Title title="featured rooms" />

        <div className="featured-rooms-center">
          { <Loading />}
        </div>
      </section>
    );
  }
}
