import React, { Component } from 'react';

//props: radius, src, border, margin (All are optional)
class CircleWithImage extends Component
{
    constructor()
    {
        super();
    }

    render()
    {  //console.log("this.props.radis", this.props.radius)
        let styles =
        {
            width: '' + (this.props.radius || '30px'),
            height: '' + (this.props.radius || '30px'),
            borderRadius: '50%',
            margin: '' + (this.props.margin || '10px') + '',
            border: '' + (this.props.border || '') + '',
            backgroundImage: 'url(' + (this.props.src || 'https://cbssanfran.files.wordpress.com/2016/06/swatch.jpg?w=560&h=360&crop=1') + ')',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            borderColor: "#55B114",
            display: 'inline-block'
        }
//console.log("styles", styles)
        return (
            <div className="responsive-img" style={styles}></div>
        )
    }
}

export default CircleWithImage;
