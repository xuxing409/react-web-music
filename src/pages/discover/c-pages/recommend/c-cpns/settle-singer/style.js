import styled from "styled-components";

export const SetterSongerWrapper = styled.div`
  margin-top: 15px;
  .singer-list {
    margin: 6px 0 14px 20px;
    .singer {
      margin-top: 14px;
      width: 210px;
      .info {
        text-decoration: none;
        display: flex;

        height: 62px;
        background: #fafafa;
        :hover {
          background-color: #f4f4f4;
        }

        .img {
          width: 62px;
          height: 62px;
        }
        .name {
          width: 148px;
          height: 62px;
          padding-left: 14px;
          border: 1px solid #e9e9e9;
          border-left: none;

          font-size: 14px;
          color: #333;
          cursor: pointer;
          .nickname {
            color: #666;
          }
        }
      }
    }
  }
  .apply-for {
    width: 100%;
    .btn {
      display: inline-block;
      margin-left: 20px;

      color: #333;
      font-weight: 700;
      text-align: center;
      height: 31px;
      line-height: 31px;
      border-radius: 4px;
      background-color: #fafafa;
      border: 1px solid #c3c3c3;
      text-decoration: none;
      padding: 0 5px 0 0;
      font-size: 12px;

      i {
        width: 203px;
        margin: 0 auto;
        padding: 0 15px 0 20px;
        pointer-events: none;
        display: inline-block;
        zoom: 1;
        height: 31px;
        line-height: 31px;
        overflow: hidden;
        line-height: 32px;
        vertical-align: top;
        text-align: center;
        cursor: pointer;
      }
    }
  }
`;
