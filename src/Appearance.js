import React from 'react';

import styled from 'styled-components'

// companies
import {Amazon} from 'styled-icons/boxicons-logos'
import {Apple} from 'styled-icons/boxicons-logos'
import {FacebookSquare} from 'styled-icons/boxicons-logos'
import {Instagram} from 'styled-icons/boxicons-logos'
import {Snapchat} from 'styled-icons/boxicons-logos'
import {Twitter} from 'styled-icons/boxicons-logos'

// heads
import {Angry} from 'styled-icons/boxicons-regular'
import {Bot} from 'styled-icons/boxicons-regular'
import {Confused} from 'styled-icons/boxicons-regular'
import {Cool} from 'styled-icons/boxicons-regular'
import {HappyBeaming} from 'styled-icons/boxicons-regular'
import {HappyHeartEyes} from 'styled-icons/boxicons-regular'

function Appearance(props){

    let type = undefined
    switch(props.type) {
        case 'HappyHeart':
          type = (<HappyHeartEyes
                    className={props.styleClass}
                    style={{left:props.x,top:props.y}}
                    color={props.color}
                    size={props.size} />)
          break;
          case 'Angry':
            type = (<Angry
                        className={props.styleClass}
                        style={{left:props.x,top:props.y}}
                        color={props.color}
                        size={props.size}  />)
            break;
          case 'Confused':
            type = (<Confused
                        className={props.styleClass}
                        style={{left:props.x,top:props.y}}
                        color={props.color}
                        size={props.size}  />)
            break;
          case 'Bot':
            type = (<Bot
                        className={props.styleClass}
                        style={{left:props.x,top:props.y}}
                        color={props.color}
                        size={props.size}  />)
            break;
          case 'Cool':
            type = (<Cool
                        className={props.styleClass}
                        style={{left:props.x,top:props.y}}
                        color={props.color}
                        size={props.size} />)
            break;
          case 'HappyBeaming':
            type = (<HappyBeaming
                        className={props.styleClass}
                        style={{left:props.x,top:props.y}}
                        color={props.color}
                        size={props.size} />)
            break;
      case 'Facebook':
        type = (<FacebookSquare
                        className={props.styleClass}
                        style={{left:props.x,top:props.y}}
                        color={props.color}
                        size={props.size} />)
        break;
      case 'Instagram':
        type = (<Instagram
                        className={props.styleClass}
                        style={{left:props.x,top:props.y}}
                        color={props.color}
                        size={props.size} />)
        break;
      case 'Snapchat':
        type = (<Snapchat
                        className={props.styleClass}
                        style={{left:props.x,top:props.y}}
                        color={props.color}
                        size={props.size}  />)
        break;
      case 'Twitter':
        type = (<Twitter
                        className={props.styleClass}
                        style={{left:props.x,top:props.y}}
                        color={props.color}
                        size={props.size} />)
        break;
      default:
        type = (<Snapchat
                        className={props.styleClass}
                        style={{left:props.x,top:props.y}}
                        color={props.color}
                        size={props.size} />)
    }

    return (
        type
    )
}

export default Appearance
