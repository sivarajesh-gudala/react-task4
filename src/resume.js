import React from "react";
import data from "./data.json";
import image from "./profilelogo.jpg";

function Resume(props) {
  let profile = data.details[props.location.personcard.id];
  console.log(profile);

  return (
    <div className="container-fluid resume">
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-5">
            <img
              src={image}
              className="img-fluid rounded-circle mt-5 ml-4"
              alt="resumeimage"
              width="200"
              height="200"
            />

            <table
              className="table  table-striped table-hover table-responsive"
              key="{index}"
            >
              <tbody className="table-bordered border-dark">
                <tr>
                  <td>
                    <b>Address</b>
                  </td>

                  <td>{profile.card.address}</td>
                </tr>
                <tr>
                  <td>
                    <b>Date Of Birth</b>
                  </td>

                  <td>{profile.card.dob}</td>
                </tr>
                <tr>
                  <td>
                    <b>Marital Status</b>
                  </td>

                  <td>{profile.card.maritalstatus}</td>
                </tr>
                <tr>
                  <td>
                    <b>Nationality</b>
                  </td>

                  <td>{profile.card.nationality}</td>
                </tr>
                <tr>
                  <td>
                    <b>GitHub</b>
                  </td>

                  <td>
                    <a href="https://github.com/sivarajesh-gudala">
                      GitHub Url
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="col-md-7">
            <div className="mt-5">
              <h3>Career Objective</h3>
              <p>{profile.careerobjective.info}</p>
            </div>

            <h3>educationalqualifications</h3>
            <table
              className="table  table-striped table-hover table-responsive"
              key="index"
            >
              <tbody className="table-bordered border-dark">
                <tr>
                  <td>{profile.educationalqualifications[0].passoutyear}</td>
                  <td>{profile.educationalqualifications[0].degree}</td>
                  <td>{profile.educationalqualifications[0].institute}</td>
                  <td>{profile.educationalqualifications[0].Percentage}</td>
                </tr>
                <tr>
                  <td>{profile.educationalqualifications[1].passoutyear}</td>
                  <td>{profile.educationalqualifications[1].degree}</td>
                  <td>{profile.educationalqualifications[1].institute}</td>
                  <td>{profile.educationalqualifications[1].Percentage}</td>
                </tr>
                <tr>
                  <td>{profile.educationalqualifications[2].passoutyear}</td>
                  <td>{profile.educationalqualifications[2].degree}</td>
                  <td>{profile.educationalqualifications[2].institute}</td>
                  <td>{profile.educationalqualifications[2].Percentage}</td>
                </tr>
              </tbody>
            </table>

            <h3>Skills</h3>
            <ul>
              <li>{profile.technicalskills[0].skill1}</li>
              <li>{profile.technicalskills[0].skill2}</li>
              <li>{profile.technicalskills[0].skill3}</li>
              <li>{profile.technicalskills[0].skill4}</li>
              <li>{profile.technicalskills[0].skill5}</li>
              <li>{profile.technicalskills[0].skill6}</li>
            </ul>

            <h3>Achievements</h3>
            <ul>
              <li>{profile.Achievements.one}</li>
              <li>{profile.Achievements.two}</li>
              <li>{profile.Achievements.three}</li>
            </ul>

            <h3>Languages</h3>
            <ul>
              <li>{profile.languages.first}</li>
              <li>{profile.languages.second}</li>
              <li>{profile.languages.third}</li>
            </ul>
            <h3>Interests</h3>
            <ul>
              <li>{profile.interests.one}</li>
              <li>{profile.interests.two}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
