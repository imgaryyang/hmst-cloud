package com.syscloud.provider.user.model.vo;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.io.Serializable;
import java.util.Date;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class SysUser implements Serializable{
    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column sys_user.id
     *
     * @mbggenerated Thu Dec 21 23:20:45 CST 2017
     */
    private Integer id;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column sys_user.username
     *
     * @mbggenerated Thu Dec 21 23:20:45 CST 2017
     */
    private String username;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column sys_user.telephone
     *
     * @mbggenerated Thu Dec 21 23:20:45 CST 2017
     */
    private String telephone;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column sys_user.mail
     *
     * @mbggenerated Thu Dec 21 23:20:45 CST 2017
     */
    private String mail;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column sys_user.password
     *
     * @mbggenerated Thu Dec 21 23:20:45 CST 2017
     */
    private String password;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column sys_user.depe_id
     *
     * @mbggenerated Thu Dec 21 23:20:45 CST 2017
     */
    private Integer deptId;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column sys_user.status
     *
     * @mbggenerated Thu Dec 21 23:20:45 CST 2017
     */
    private Integer status;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column sys_user.remark
     *
     * @mbggenerated Thu Dec 21 23:20:45 CST 2017
     */
    private String remark;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column sys_user.operator
     *
     * @mbggenerated Thu Dec 21 23:20:45 CST 2017
     */
    private String operator;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column sys_user.operator_time
     *
     * @mbggenerated Thu Dec 21 23:20:45 CST 2017
     */
    private Date operatorTime;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column sys_user.operator_ip
     *
     * @mbggenerated Thu Dec 21 23:20:45 CST 2017
     */
    private String operatorIp;

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column sys_user.id
     *
     * @return the value of sys_user.id
     *
     * @mbggenerated Thu Dec 21 23:20:45 CST 2017
     */
    public Integer getId() {
        return id;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column sys_user.id
     *
     * @param id the value for sys_user.id
     *
     * @mbggenerated Thu Dec 21 23:20:45 CST 2017
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column sys_user.username
     *
     * @return the value of sys_user.username
     *
     * @mbggenerated Thu Dec 21 23:20:45 CST 2017
     */
    public String getUsername() {
        return username;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column sys_user.username
     *
     * @param username the value for sys_user.username
     *
     * @mbggenerated Thu Dec 21 23:20:45 CST 2017
     */
    public void setUsername(String username) {
        this.username = username == null ? null : username.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column sys_user.telephone
     *
     * @return the value of sys_user.telephone
     *
     * @mbggenerated Thu Dec 21 23:20:45 CST 2017
     */
    public String getTelephone() {
        return telephone;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column sys_user.telephone
     *
     * @param telephone the value for sys_user.telephone
     *
     * @mbggenerated Thu Dec 21 23:20:45 CST 2017
     */
    public void setTelephone(String telephone) {
        this.telephone = telephone == null ? null : telephone.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column sys_user.mail
     *
     * @return the value of sys_user.mail
     *
     * @mbggenerated Thu Dec 21 23:20:45 CST 2017
     */
    public String getmail() {
        return mail;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column sys_user.mail
     *
     * @param mail the value for sys_user.mail
     *
     * @mbggenerated Thu Dec 21 23:20:45 CST 2017
     */
    public void setmail(String mail) {
        this.mail = mail == null ? null : mail.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column sys_user.password
     *
     * @return the value of sys_user.password
     *
     * @mbggenerated Thu Dec 21 23:20:45 CST 2017
     */
    public String getPassword() {
        return password;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column sys_user.password
     *
     * @param password the value for sys_user.password
     *
     * @mbggenerated Thu Dec 21 23:20:45 CST 2017
     */
    public void setPassword(String password) {
        this.password = password == null ? null : password.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column sys_user.depe_id
     *
     * @return the value of sys_user.depe_id
     *
     * @mbggenerated Thu Dec 21 23:20:45 CST 2017
     */
    public Integer getdeptId() {
        return deptId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column sys_user.depe_id
     *
     * @param deptId the value for sys_user.depe_id
     *
     * @mbggenerated Thu Dec 21 23:20:45 CST 2017
     */
    public void setdeptId(Integer deptId) {
        this.deptId = deptId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column sys_user.status
     *
     * @return the value of sys_user.status
     *
     * @mbggenerated Thu Dec 21 23:20:45 CST 2017
     */
    public Integer getStatus() {
        return status;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column sys_user.status
     *
     * @param status the value for sys_user.status
     *
     * @mbggenerated Thu Dec 21 23:20:45 CST 2017
     */
    public void setStatus(Integer status) {
        this.status = status;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column sys_user.remark
     *
     * @return the value of sys_user.remark
     *
     * @mbggenerated Thu Dec 21 23:20:45 CST 2017
     */
    public String getRemark() {
        return remark;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column sys_user.remark
     *
     * @param remark the value for sys_user.remark
     *
     * @mbggenerated Thu Dec 21 23:20:45 CST 2017
     */
    public void setRemark(String remark) {
        this.remark = remark == null ? null : remark.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column sys_user.operator
     *
     * @return the value of sys_user.operator
     *
     * @mbggenerated Thu Dec 21 23:20:45 CST 2017
     */
    public String getOperator() {
        return operator;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column sys_user.operator
     *
     * @param operator the value for sys_user.operator
     *
     * @mbggenerated Thu Dec 21 23:20:45 CST 2017
     */
    public void setOperator(String operator) {
        this.operator = operator == null ? null : operator.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column sys_user.operator_time
     *
     * @return the value of sys_user.operator_time
     *
     * @mbggenerated Thu Dec 21 23:20:45 CST 2017
     */
    public Date getOperatorTime() {
        return operatorTime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column sys_user.operator_time
     *
     * @param operatorTime the value for sys_user.operator_time
     *
     * @mbggenerated Thu Dec 21 23:20:45 CST 2017
     */
    public void setOperatorTime(Date operatorTime) {
        this.operatorTime = operatorTime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column sys_user.operator_ip
     *
     * @return the value of sys_user.operator_ip
     *
     * @mbggenerated Thu Dec 21 23:20:45 CST 2017
     */
    public String getOperatorIp() {
        return operatorIp;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column sys_user.operator_ip
     *
     * @param operatorIp the value for sys_user.operator_ip
     *
     * @mbggenerated Thu Dec 21 23:20:45 CST 2017
     */
    public void setOperatorIp(String operatorIp) {
        this.operatorIp = operatorIp == null ? null : operatorIp.trim();
    }
}