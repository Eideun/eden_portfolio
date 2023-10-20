import { StacksStyles } from "../styles/Stacks.styles";
import React,{ useEffect, useRef } from "react";

const Stacks = () => {
    const containerRef = useRef(null);

    const colors = ["#f9f9f9", "#5733FF", "#eee"];
    let currentIndex = 0;
  
    useEffect(() => {
      const container = containerRef.current;
  
      const changeBackgroundColor = () => {
        currentIndex = (currentIndex + 1) % colors.length;
        const newColor = colors[currentIndex];
        container.style.setProperty("--bg-color", newColor);
      };
  
      const intervalId = setInterval(changeBackgroundColor, 6000);
  
      return () => clearInterval(intervalId);
    }, []);

  return (
    <div id="stacks">
      <StacksStyles.Container ref={containerRef}>
        <StacksStyles.Title>
          <h2>Stack</h2>
        </StacksStyles.Title>
        <StacksStyles.Section>
          <h3># FRONT-END</h3>
        </StacksStyles.Section>
        <StacksStyles.Wrapper>
          <StacksStyles.Bar>
            <StacksStyles.BarTag>
              <span>HTML</span>
            </StacksStyles.BarTag>
            <StacksStyles.BarFlex>
              <StacksStyles.BarFill style={{ width: "90%" }} />
            </StacksStyles.BarFlex>
            <StacksStyles.Percentage>
              <span>90%</span>
            </StacksStyles.Percentage>
          </StacksStyles.Bar>
          <StacksStyles.Bar>
            <StacksStyles.BarTag>
              <span>CSS</span>
            </StacksStyles.BarTag>
            <StacksStyles.BarFlex>
              <StacksStyles.BarFill style={{ width: "80%" }} />
            </StacksStyles.BarFlex>
            <StacksStyles.Percentage>
              <span>80%</span>
            </StacksStyles.Percentage>
          </StacksStyles.Bar>
          <StacksStyles.Bar>
            <StacksStyles.BarTag>
              <span>JavaScript</span>
            </StacksStyles.BarTag>
            <StacksStyles.BarFlex>
              <StacksStyles.BarFill style={{ width: "70%" }} />
            </StacksStyles.BarFlex>
            <StacksStyles.Percentage>
              <span>70%</span>
            </StacksStyles.Percentage>
          </StacksStyles.Bar>
          <StacksStyles.Bar>
            <StacksStyles.BarTag>
              <span>TypeScript</span>
            </StacksStyles.BarTag>
            <StacksStyles.BarFlex>
              <StacksStyles.BarFill style={{ width: "55%" }} />
            </StacksStyles.BarFlex>
            <StacksStyles.Percentage>
              <span>55%</span>
            </StacksStyles.Percentage>
          </StacksStyles.Bar>
          <StacksStyles.Bar>
            <StacksStyles.BarTag>
              <span>React</span>
            </StacksStyles.BarTag>
            <StacksStyles.BarFlex>
              <StacksStyles.BarFill style={{ width: "70%" }} />
            </StacksStyles.BarFlex>
            <StacksStyles.Percentage>
              <span>70%</span>
            </StacksStyles.Percentage>
          </StacksStyles.Bar>
          <StacksStyles.Bar>
            <StacksStyles.BarTag>
              <span>jQuery</span>
            </StacksStyles.BarTag>
            <StacksStyles.BarFlex>
              <StacksStyles.BarFill style={{ width: "60%" }} />
            </StacksStyles.BarFlex>
            <StacksStyles.Percentage>
              <span>60%</span>
            </StacksStyles.Percentage>
          </StacksStyles.Bar>
          <StacksStyles.Bar>
            <StacksStyles.BarTag>
              <span>Next.js</span>
            </StacksStyles.BarTag>
            <StacksStyles.BarFlex>
              <StacksStyles.BarFill style={{ width: "60%" }} />
            </StacksStyles.BarFlex>
            <StacksStyles.Percentage>
              <span>60%</span>
            </StacksStyles.Percentage>
          </StacksStyles.Bar>
        </StacksStyles.Wrapper>
        <StacksStyles.Section>
          <h3>#BACK-END</h3>
        </StacksStyles.Section>
        <StacksStyles.Wrapper>
          <StacksStyles.Bar>
            <StacksStyles.BarTag>
              <span>Node.js</span>
            </StacksStyles.BarTag>
            <StacksStyles.BarFlex>
              <StacksStyles.BarFill style={{ width: "40%" }} />
            </StacksStyles.BarFlex>
            <StacksStyles.Percentage>
              <span>40%</span>
            </StacksStyles.Percentage>
          </StacksStyles.Bar>
          <StacksStyles.Bar>
            <StacksStyles.BarTag>
              <span>Express.js</span>
            </StacksStyles.BarTag>
            <StacksStyles.BarFlex>
              <StacksStyles.BarFill style={{ width: "40%" }} />
            </StacksStyles.BarFlex>
            <StacksStyles.Percentage>
              <span>40%</span>
            </StacksStyles.Percentage>
          </StacksStyles.Bar>
          <StacksStyles.Bar>
            <StacksStyles.BarTag>
              <span>MongoDB</span>
            </StacksStyles.BarTag>
            <StacksStyles.BarFlex>
              <StacksStyles.BarFill style={{ width: "30%" }} />
            </StacksStyles.BarFlex>
            <StacksStyles.Percentage>
              <span>30%</span>
            </StacksStyles.Percentage>
          </StacksStyles.Bar>
        </StacksStyles.Wrapper>
        <StacksStyles.Section>
          <h3>#ETC</h3>
        </StacksStyles.Section>
        <StacksStyles.Wrapper>
          <StacksStyles.Bar>
            <StacksStyles.BarTag>
              <span>Git</span>
            </StacksStyles.BarTag>
            <StacksStyles.BarFlex>
              <StacksStyles.BarFill style={{ width: "65%" }} />
            </StacksStyles.BarFlex>
            <StacksStyles.Percentage>
              <span>65%</span>
            </StacksStyles.Percentage>
          </StacksStyles.Bar>
          <StacksStyles.Bar>
            <StacksStyles.BarTag>
              <span>Figma</span>
            </StacksStyles.BarTag>
            <StacksStyles.BarFlex>
              <StacksStyles.BarFill style={{ width: "60%" }} />
            </StacksStyles.BarFlex>
            <StacksStyles.Percentage>
              <span>60%</span>
            </StacksStyles.Percentage>
          </StacksStyles.Bar>
          <StacksStyles.Bar className="last">
            <StacksStyles.BarTag>
              <span>Bootstrap</span>
            </StacksStyles.BarTag>
            <StacksStyles.BarFlex>
              <StacksStyles.BarFill style={{ width: "65%" }} />
            </StacksStyles.BarFlex>
            <StacksStyles.Percentage>
              <span>65%</span>
            </StacksStyles.Percentage>
          </StacksStyles.Bar>
        </StacksStyles.Wrapper>
      </StacksStyles.Container>
    </div>
  );
};

export default Stacks;
