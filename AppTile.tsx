import * as React from 'react';
import './style.css';
import styled from 'styled-components';

interface Test {
  name: string;
}

const IconWrapper = styled.div`
display:flex;
background-color: lightgrey;
align-items:center;
height:100%;
width:25%;
justify-content:center;
border-top-left-radius:18px;
border-bottom-left-radius:18px;
`;
const Header = styled.h4`
  margin-top: 0px;
  margin-bottom: 4px;
  text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: calc(100% - 10px);
`;
const AppVersion = styled.span`
   margin-bottom: 4px;
   margin-top: 16px;
`;
const AppTileWrapper = styled.div`
    display: flex;
    padding :20px;
    flex-direction:;
    width: 390px;
    height:190px;
     
`;
const Flex1 = styled.div`
  display:flex;
  background-color:#fdfbfb;
  width:220px;
  padding: 15px;
  flex-direction:column;
  border-top-right-radius: 18px;
  border-bottom-right-radius: 18px;
`;
const Button = styled.button`
  background-color:white;
 color:#3b4455;
border: none;
`;
const ArchiveWrapper = styled.div`
display:flex;
gap:10px;
`;
const FlexWrapper = styled.div`
  display: flex;
  gap: 4px;
`;
const Image = styled.img`
  width :20px;
  height :20px;
`;
const agilepoint = {
  imgUrl: 'https://resources.agilepoint.com/hubfs/AgilePoint%20Icon-02.png',
  imgSize: 80,
};
const apple = {
  imgUrl:
    'https://media.idownloadblog.com/wp-content/uploads/2018/07/Apple-logo-black-and-white.png',
  imgSize: 20,
};
const android = {
  imgUrl:
    'https://www.androidauthority.com/wp-content/uploads/2019/08/new-android-logo-2019-robot-head-black-background.jpg',
  imgSize: 20,
};
const archive = {
  name: 'Archive',
  imgUrl:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX///8AAADs7Oyurq5XV1eoqKjy8vJKSkri4uKlpaVHR0ff398XFxc+Pj7a2tr8/PxfX18fHx+0tLR8fHwSEhJwcHDQ0ND29vbExMRUVFQyMjJnZ2eNjY0pKSmWlpa9vb0oKCgdHR06OjqEhIRubm6RkZGenp6vFMH9AAADQ0lEQVR4nO3c4VaiUBRAYcRSMwUV0bSMxhl5/0ecqVYnLlOAXOSea/v7V4ulZ6cptPIEAQAAAAAAgK+2I19ta9vCVTId+G2frEbf9j3sXI/Xkd3D130vrgfr0Ev2X1/86Hqoji1iM3Cydj1R52ZhMTByPc5FRIWXUNezXMjno3h9T9F364/fxdT1JBeTvgduXM9xQZu3wr3rMS5o/vZO73qKi3p9EBeuh7iox38XEqVvHfIo9FeUz0o9cflJ+vTtebkvnsygTekb/gcGQWIU5YFxxv3L9XSdMArT4FD88tn1cJ0wnpZz84xt43q4TmTFpJn5kE5cD9cJ80rJLLx3PVwn7in0HoX+o9B/FPqPQv9R6D8K/Ueh/3524XX8FWNSUXi6vQanisJrRKH/KPQfhf6j0H8U+u8HFM6LlrNP6+PYH8d1YfKl0WRed9wU41durn1aWRUHv6k40Cgc9jafvSGFHyhUi0JBoVoUCgrVolBQqBaFgkK1KBQUqkWhoFAtCgWFavVcmCXjaRu7tPWf2XstjMqfUz3HLKq/g6/0WWj+y9X52iX2WXi0LDxoL7TfktLqU549Ft5ZF7b6pG6Phb+tCxPlhaVPw19h4XBg6055of26olb/p9znu4XtzrBFq3vtszBeWgUu4/q7cFwYxH8sAtN2gX2feYeru3ay7zce1uDqSVCoFoWCQrUoFBSqRaGgUC0KBYVqUSgoVItCQaFaFAoK1aJQUKgWhYJCtSgUFKpFoaBQLQoFhWpRKChUi0JBoVoUCgrVolBQqBaFgkK1KBQUqkWhoFAtCgWFalEoKFSLQkGhWhQKCtW6/sLbpoWL4oGn3uazZ6zFqVoekhYPHPc2n71pcfC04sC8eOAg7G1AW+YKtbziyMw4sur5rIvxEA4eKo4cGUe23IbTvxtz7MoNKeV9cnkUahc9l2Y+Vv408oH/qldpjepvQL2aNT6J6/ms1e1727oe0Nq2prCDxYduNTjXXNTfimKN3sP3rqe0sG8SGGwPrudsbV/7S/guntbflkq7Zn2vTvW3ptBZu13vx67HPdvu3KWZG79eUxdtdkhvs2TuevBG5knW8BXmK3E40S1suS0TAAAAAABAmb85/mDQvjiuAwAAAABJRU5ErkJggg==',
  imgSize: 20,
};
const build = {
  name: 'Build',
  imgUrl:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AAADq6uq6urqEhIR/f38jIyP6+vqvr6/X19fKyspvb2/BwcGRkZE8PDyUlJTd3d3k5ORgYGDv7++KioqmpqY7OzshISHR0dEyMjJSUlIqKipDQ0N2dna1tbVra2t4gxylAAAEyUlEQVR4nO2da3OqMBRFDVheokKR+qi2//9f3jpygEAQq/swd+heH8OQM4uEgKDbxYIQQqYnjxMfQxpn4QMFwyxOQRWTOBurdlgeDZJglY5UTFcBtOJxebhTLTtBi90IkjsVE6zejdPgQG4Vql1ZDc3VcKVUceuup1XOmHPhLFic1SquphX8OTmchp+KFR2KWlP0xrtD8F21Ym+iZqrljIl6gpFyxe5y06yil9RDkezqXoPuahM2q+guQRXM00vd68mud5D2Y+48ZZ4lrKdi2dlSyob3R+4KHievL+j2dXEpgtBqV2QBO3faZR39hlcUxaWzFTuCV8J91bV9xSiq1j12BK/krtGSxgu8XDMdfavVH5i8CORcbA9XXLWN3UQ+g1f1ba+mspJ6ChXTqu+41ZYo1ltUfdsXKLn8ahSUY9q+IfYnMLRP/LcJDNvnBQ1fgoZwaAiHhnBoCIeGcGgIh4ZwaAiHhnBoCIeGcGgIh4ZwaAiHhnBoCIeGcGgIh4ZwaAiHhnBoCIeGcGgIh4ZwaAiHhnBoCIeGcGgIh4ZwaAiHhnBoCIeGcGgIh4ZwaAiHhnBoCIeGcGgIh4ZwaAiHhnD+pmE6geHaatxNYNjOT5BMhXuhVc8SVn27MxXwsRhNfkI7U0Hyd3YK9eQMsHMxvpytGGR+tDN46jgchUO6qbq2Y1Mka2SDLyiTxg79kRQZV57Ta0gARtBpl2M6EDz2AhL6Y4dhyVJjvsGjWAdsrTsb1kMbXqTJgOsEtdSpTfsSt6CGvkzR/jLt1Vs2Pu6oeqUE/vQmTWJ06U9G3fg0x3VBM5DuZ5z6wxR+qFbsR9KFehF/xn0r4Y3v9jyOQ7ooFEP+4n65RXOfocCnO6lRK+bvY2jt8rQm6uBFL9JIEzXb4aUyVFlu9v0Iw6ZiiT4bg/X9i4+3Rh/Vczly8Sn8aLvEsI78RxLucj9agypuI999AhJCCCGEEEKm5vrZ4g3DLvp66LPFV7QDVRz/bDH7z4ez/4yv9Zxm8588p5n9s7b5Py+d/TPv+b+3aL17wj2tmv7dU1HWIp13T/X7w8H/ZnqS8feH4FekQ+8PZ/8OeP7v8ef/XYz5f59m/t+Jmv/32mj4EjSEQ0M4NIRDQzg0hENDODSEQ0M4NIRDQzg0hENDODSEQ0M4NIRDQzg0hENDODSEQ0M4NIRDQzg0hENDODSEQ0M4NIRDQzg0hENDODSEQ0M4NIRDQzg0hENDODSEQ0M4NIRDQzg0hENDODSEQ0M4NITzNw3lN/qPRHP9mqpvOwBjO4FhOz9BMhXSwb1er+fOVNCYNZKf4PqPkotCvdIxZ5rzolSoeKn6budiLI5q0zSUv2Owg32KqnWPD8aQ2JSj1bp0tiKQ5Jtzp11CXfr/YfAqkj9lL20HI4rYUQzrDLjudJTJa96xo5jLdDQHe8NJ2s0lzT0Qya7utTcb69lrzC5BFczTS93rqVMwM7r0g/6i8Z1eIusW1A0Xc+VPaYUY3nDkT2lG0n06TxnFGEPz7Sqop7hxR8AVm/Fdn8QpqDdRBzPgQq2DOhiRlp3Gd/41wb14rUQjMfXUW2RaHJbH8R5+QbAau9VNV1jJ4/IwUnGRx4mPIY2zR67mYRanoIpJfG/4CCFEi3/sJFYJ+3SwvAAAAABJRU5ErkJggg==',
  imgSize: 20,
};

export default function AppTile(props) {
  const { appName, appDescription, appVersion, appType } = props.data;

  return (
    <React.Fragment>
      <AppTileWrapper>
        <IconWrapper>
          <img
            src={agilepoint.imgUrl}
            style={{
              width: agilepoint.imgSize,
              height: agilepoint.imgSize,
            }}
          />
        </IconWrapper>

        <Flex1>
          <Header>{appName}</Header>
          <span>{appDescription}</span>
          <AppVersion>{appVersion}</AppVersion>
          <Image src={appType === 'android' ? android.imgUrl : apple.imgUrl} />

          <br />
          <br />
          <FlexWrapper>
            <FlexWrapper>
              <img
                src={archive.imgUrl}
                style={{
                  width: archive.imgSize,
                  height: archive.imgSize,
                }}
              />
              <Button> Archive</Button>
            </FlexWrapper>
            <br />

            <FlexWrapper>
              <img
                src={build.imgUrl}
                style={{
                  width: build.imgSize,
                  height: build.imgSize,
                }}
              />

              <Button> Build </Button>
            </FlexWrapper>
          </FlexWrapper>
        </Flex1>
      </AppTileWrapper>
    </React.Fragment>
  );
}
