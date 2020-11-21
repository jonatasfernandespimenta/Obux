<img src="components/drop-down.png" />

A Simple set of components allowing you to create dropdowns.

### Usage

```javascript
import {
  DropDown,
  DropDownTrigger,
  DropDownMenu,
  DropDownItem
} from '@admin-bro/design-system'

return (
  <DropDown>
    <DropDownTrigger>
      <Button>
        <Icon icon="OverflowMenuHorizontal" />
        This is trigger
      </Button>
    </DropDownTrigger>
    <DropDownMenu>
      <DropDownItem>
        <Link href="/some">
          <Icon icon="Video" />
          Some menu item
        </Link>
      </DropDownItem>
    </DropDownMenu>
  </DropDown>
)
```

It contains a couple of sub-components:

- `DropDown` - an actual wrapper for an entire DropDown
- `DropDownTrigger` - it has to be right inside the DropDown.
  It is what the user sees when the DropDown is not hovered
- `DropDownMenu` - wraps elements which are hidden by default.
  Shown after hovering Trigger
- `DropDownItem` - it is a wrapper for a menu item list.
  It can next contain either a `Link` or `Button`.

Props:
- DropDownMenu extends {@link PositionProps}, so you can add prop like `top="xl"`
- DropDownItem extends {@link SpaceProps}
- DropDownTrigger also extends {@link SpaceProps}


### Example

```reactComponent
return (
  <Box p="xxl" pb="x5">
    <DropDown>
      <DropDownTrigger>
        <Button>
          <Icon icon="OverflowMenuHorizontal" />
          Hover me to see dropdown
        </Button>
      </DropDownTrigger>
      <DropDownMenu>
        <DropDownItem>
          Menu item 1
        </DropDownItem>
        <DropDownItem>
          Menu item 2
        </DropDownItem>
      </DropDownMenu>
    </DropDown>
  </Box>
)
```
