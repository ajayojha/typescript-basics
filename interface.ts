<div class="chosen-container chosen-container-multi  {{openDrop}} {{activeTag}} "[class.rxMessage - control - element] = "!isInValid" style = "width: 100%;" title = "" >
    <ul class="chosen-choices form-control rounded-0" >
        <li class="search-choice" * ngFor="let tag of selectedTags" >
            <span>{{ tag.text }}</span>
                < i class="close " * ngIf="!tagDisabled"(click) = "removeTag(tag)" >& times; </i>
                    < /li>
                    < li class="search-field" >
                        <input[tabindex]="controlTabIndex"[class] = "mainClass"[placeholder] = "selectedTags.length == 0 ? placeholder : ''" type = "text" #tagSearch[disabled] = "tagDisabled"(click) = "onFocus($event)"(focus) = "onFocus($event)"(blur) = "onBlur($event)"(keydown) = "onKeydown($event,scroller)"(keydown.enter) = "enter($event.target)"(keyup) = "onKeyup($event,scroller)" value = "" class="" autocomplete = "off" >
                            </li>
                            < /ul>
                            < div class="chosen-drop" #scroller >
                                <ul class="chosen-results" * ngIf="!isLimitExceeded" >
                                    <li class="active-result" * ngFor="let tag of dropSource "(click) = "onClick(tag,tagSearch)"(mouseover) = "onMouseover(tag)"[class.highlighted] = "tag.active" > {{ tag.text }}</li>
                                        < /ul>
                                        < ul class="chosen-results" * ngIf="isLimitExceeded" >
                                            <li class="active-result" > {{ maxSelectionMessage }}</li>
                                                < /ul>
                                                < /div>
                                                < /div>